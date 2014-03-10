Based on RequireJS's `example-jquery-cdn <https://github.com/requirejs/example-jquery-cdn>`_ example.

- `Static application template <media/template/app.html>`_ is in ``media/template``.
- `Static Rickshaw demo <media/template/rickshaw.html>`_

Changelog 2014-03-10
  - Moved stuff around to fit personal htdocs project better.
  - Added d3, Rickshaw. Fixed a little issue for Richshaw with d3.select failing.

::
  
  .
  ├── media
  │   ├── script
  │   │   ├── dotmpe-requirejs-app.js
  │   │   ├── lib
  │   │   │   ├── jquery.alpha.js
  │   │   │   ├── jquery.beta.js
  │   │   │   └── require.js
  │   │   └── requirejs-app
  │   │       ├── dashboard.js
  │   │       └── jquery.js
  │   └── template
  │       ├── app.html
  │       └── rickshaw.html
  ├── ReadMe.rst
  └── tools
      ├── build.js
      ├── r.js
      └── server.js

