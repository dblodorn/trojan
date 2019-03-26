<?php
  function cpt_releases(){
    $args = array(
      'post_type' => 'release',
      'posts_per_page' => -1
    );
    $the_query = new WP_Query( $args );
    if ( $the_query->have_posts() ) :
      $data = array();
      while ($the_query->have_posts()) : $the_query->the_post();
        $post = get_post($post_id);
        $data[] = array(
          'post_data' => post_data($post),
          'about_release' => get_field('about_release', $post->ID),
          'spotify_link' => get_field('spotify_link', $post->ID),
          'apple_music_link' => get_field('apple_music_link', $post->ID),
        );
      endwhile;
    endif;
    return $data;
  }