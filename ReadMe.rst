Based on RequireJS's `example-jquery-cdn <https://github.com/requirejs/example-jquery-cdn>`_ example.

- `Static application template <media/template/app.html>`_ is in ``media/template``.
- `Static Rickshaw demo <media/template/rickshaw.html>`_

Branch docs
  nodeapp
    - Moved to apps corresponding to node apps for easy seed.
      Created branch nodeapp_demo to show actual example.

Changelog 
  2014-03-10
    - Moved stuff around to fit personal htdocs project better.
    - Added d3, Rickshaw. Fixed a little issue for Richshaw with d3.select failing.
  2014-05-04
    - Moved paths to align with other nodejs apps.
    - Using requireJS (at frontend) should be more convenient than
      usig bower and coding library baths into the templates.

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


