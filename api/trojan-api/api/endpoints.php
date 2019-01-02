<?php

  function main_data(){
    $data = array();
    $data['options'] = get_fields('options');
    return $data;
  }
  
  function api_setup_endpoints() {
    $namespace = 'api/v1';
    register_rest_route( $namespace, '/data/', array(
      'methods' => 'GET',
      'callback' => 'main_data'
    ));
  }

add_action( 'rest_api_init', 'api_setup_endpoints' );
