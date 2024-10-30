<?php
/**
 * iBehroozir
 *
 * @wordpress-plugin
 * Plugin Name: iBehroozir
 * Plugin URI:
 * Description: iBehrooz.ir Plugin Base Panel.
 * Version:     0.0.5
 * Author:      iBehrooz
 * Author URI:  http://iBehrooz.ir
*/


defined( 'ABSPATH' ) or die( 'Not Authorized!' );

define( "IBiBehroozirVersion", get_file_data(__FILE__, array('Version' => 'Version'), false)['Version'] );

require_once( plugin_dir_path( __FILE__ ) . '/include/ib.php' );