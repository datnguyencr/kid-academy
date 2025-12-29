import 'dart:io';

int fnv1a(List<int> bytes) {
  const int fnvOffset = 0x811c9dc5;
  const int fnvPrime = 0x01000193;

  int hash = fnvOffset;
  for (final b in bytes) {
    hash ^= b;
    hash = (hash * fnvPrime) & 0xffffffff;
  }
  return hash;
}

String versionAssets({
  required Directory dir,
  required String assetPath,
  required String extension,
  required String html,
  required String Function(String) replacementBuilder,
}) {
  for (final entity in dir.listSync()) {
    if (entity is! File || !entity.path.endsWith(extension)) continue;

    final fileName = entity.uri.pathSegments.last;
    final baseName = fileName.replaceAll(
      RegExp(r'\.[a-f0-9]{8}' + RegExp.escape(extension) + r'$'),
      extension,
    );
    final nameOnly = baseName.replaceAll(extension, '');

    final bytes = entity.readAsBytesSync();
    final hash = fnv1a(bytes).toRadixString(16).substring(0, 8);

    final newName = '$nameOnly.$hash$extension';
    final newPath = '${entity.parent.path}/$newName';

    if (!File(newPath).existsSync()) {
      entity.renameSync(newPath);
      print('Renamed: $fileName → $newName');
    }

    // Replace paths in HTML
    final regex = RegExp(
      r'(' +
          RegExp.escape(assetPath) +
          RegExp.escape(nameOnly) +
          r')(\.[a-f0-9]{8})?' +
          RegExp.escape(extension),
    );

    html = html.replaceAllMapped(regex, (_) => replacementBuilder(newName));
  }

  return html;
}

void main() {
  final htmlDir = Directory('public');
  final jsDir = Directory('public/assets/js');
  final cssDir = Directory('public/assets/css');

  if (!htmlDir.existsSync()) {
    stderr.writeln('❌ Missing public directory');
    exit(1);
  }

  // Get all HTML files in the public directory (non-recursive)
  final htmlFiles = htmlDir
      .listSync()
      .whereType<File>()
      .where((f) => f.path.endsWith('.html'))
      .toList();

  if (htmlFiles.isEmpty) {
    stderr.writeln('❌ No HTML files found in public/');
    exit(1);
  }

  for (final htmlFile in htmlFiles) {
    String html = htmlFile.readAsStringSync();

    // Version JS
    html = versionAssets(
      dir: jsDir,
      assetPath: 'assets/js/',
      extension: '.js',
      html: html,
      replacementBuilder: (name) => 'assets/js/$name',
    );

    // Version CSS
    html = versionAssets(
      dir: cssDir,
      assetPath: 'assets/css/',
      extension: '.css',
      html: html,
      replacementBuilder: (name) => 'assets/css/$name',
    );

    htmlFile.writeAsStringSync(html);
    print('✔ Updated: ${htmlFile.path}');
  }

  print('✔ All HTML files processed');
}
