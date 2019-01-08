<?php
  function options_data(){
    return array (
      'short_film' => get_field('short_film', 'option', false, false),
      'instagram' => get_field('instagram_link', 'option'),
      'facebook' => get_field('facebook_link', 'option'),
    );
  }