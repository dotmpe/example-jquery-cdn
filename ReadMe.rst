Based on RequireJS's `example-jquery-cdn <https://github.com/requirejs/example-jquery-cdn>`_ example.

- `Static application template <media/template/app.html>`_ is in ``media/template``.
- `Static Rickshaw demo <media/template/rickshaw.html>`_

Changelog 2014-03-10
  - Moved stuff around to fit personal htdocs project better.
  - Added d3, Rickshaw. Fixed a little issue for Richshaw with d3.select failing.

::
  
  .
  ├── ReadMe.rst
  ├── public
  │   ├── script
  │   │   ├── dotmpe-requirejs-app
  │   │   │   ├── d3.js
  │   │   │   ├── dashboard.js
  │   │   │   └── toolkit.js
  │   │   ├── dotmpe-requirejs-app.js
  │   │   └── lib
  │   │       └── graphdata.js
  │   └── template
  │       ├── app.html
  │       └── rickshaw.html
  └── tools
      ├── build.js
      ├── r.js
      └── server.js

