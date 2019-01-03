<?php

add_action( 'after_switch_theme', 'fs_flush_rewrite_rules' );

function fs_flush_rewrite_rules() {
	flush_rewrite_rules();
}

//-------------------------------------------------------------------
// CUSTOM POST TYPE: PROJECT
//-------------------------------------------------------------------

add_action( 'init', 'artist_cpt' );

function artist_cpt() {
  $labels = array(
    'name'               => _x( 'Artists', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Artist', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Artists', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Artists', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Artist', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New artist', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Artist', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Artist', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Artist', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Artists', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Artists', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Artist:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Artist found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Artist found in Trash.', 'your-plugin-textdomain' )
  );
  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'artists' ),
    'capability_type'    => 'post',
    'taxonomies'         => array('category'),
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-admin-users',
    'show_in_rest'       => true,
    'rest_base'          => 'artists-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'author', 'page-attributes', 'thumbnail' )
  );
  register_post_type( 'artist', $args );
}

add_action( 'init', 'release_cpt' );

function release_cpt() {
  $labels = array(
    'name'               => _x( 'Releases', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Release', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Releases', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Releases', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Release', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Release', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Release', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Release', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Release', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Releases', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Releases', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Release:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Release found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Release found in Trash.', 'your-plugin-textdomain' )
  );
  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'releases' ),
    'capability_type'    => 'post',
    'taxonomies'         => array('category'),
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-format-audio',
    'show_in_rest'       => true,
    'rest_base'          => 'releases-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'author', 'page-attributes', 'thumbnail' )
  );
  register_post_type( 'release', $args );
}

?>
