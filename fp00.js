/**
 * @version 1.0
 * @author Jock
 *
 * The main configuration file is some constant,
 * for the basic configuration of the framework.
 *
 *
 */



/**
 * Default port
 * @const
 */
exports.port = 52100; 

/**
 * Default debug
 * @const
 */
exports.debug = true;

/**
 * Default enable compression
 * @const
 */
exports.enableCompress = false;

/**
 * Default version
 * @const
 */
exports.version = ''

/**
 * Default root path
 * @const
 */
exports.root = '/home/www/release/node/fp00/jockjs/libs';

/**
 * Default user root path
 * @const
 */
exports.userRoot = '/home/www/release/node/fp00/jockjs-touch';

/**
 * Default user modules
 * @const
 */
exports.userModules = ['site','touch'];

/**
 * Default component root path
 * @const
 */
exports.componentRoot = '/home/www/release/node/fp00/jockjs-components';

/**
 * Default user modules
 * @const
 */
exports.componentModules = ['utils','ui','logger'];

/**
 * Default javascript host
 * @const
 */
exports.jsHost= 'http://jockjs.fp00.dev.anjuke.com/';

/**
 * Default javascript path
 * @const
 */
exports.jsPath = 'tjs';

/**
 * Default style hosts
 * @const
 */
exports.cssHost = 'http://jockjs.fp00.dev.anjuke.com/';

/**
 * Default style path
 * @const
 */
exports.cssPath = 'tcss';

/**
 * Default except -> uglify object property
 * @const
 */
exports.except = ['J','eval'];
