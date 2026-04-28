# Fix old to new sass

Fixed! Changed:

@import → @use 'foundation/all' as \*; (modern Sass Module System)
map-get() → map.get() with @use 'sass:map'; import
This matches the pattern in your Button.scss file. The warnings should now be gone.

Old Sass syntax (deprecated):

@import 'file';
map-get($var, 'key')

New Sass Modules (recommended):

@use 'file' as \*;
@use 'sass:map';
map.get($var, 'key')
