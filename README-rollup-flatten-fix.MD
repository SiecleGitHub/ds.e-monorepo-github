# Rollup fix so that it produces Button.js Guide

<!--
The rollup did not produce a Button.js in atoms/Button of the lib directory in the react package. Is there something wrong, because the course leader demonstrates that there is a Button.js
-->

Found the issue: Rollup was configured to flatten modules, so it only emitted index.js. I’m updating the config so it preserves the source module tree and emits atoms/Button/Button.js.

Yes — the problem was the Rollup output config.

What was wrong
preserveModules was missing from the output section.
Without it, Rollup bundled the package into a single index.js output.
That’s why you didn’t see lib/atoms/Button/Button.js.
What I fixed
Updated rollup.config.js to:

preserveModules: true
preserveModulesRoot: 'src'
Result
The build now produces:

index.js
lib/atoms/Button/Button.js
lib/atoms/Button/Button.js.map
lib/atoms/Button/Button.d.ts
lib/atoms/Button/index.d.ts
So the output now matches the expected module structure from the course.
