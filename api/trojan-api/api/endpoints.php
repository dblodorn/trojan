<?php

  function main_data(){
    $data = array();
    $data['options'] = get_fields('options');
    $data['artists'] = cpt_artists();
    $data['releases'] = cpt_releases();
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
