<?php
  function cpt_artists(){
    $args = array(
      'post_type' => 'artist',
      'posts_per_page' => -1
    );
    $the_query = new WP_Query( $args );
    if ( $the_query->have_posts() ) :
      $data = array();
      while ($the_query->have_posts()) : $the_query->the_post();
        $post = get_post($post_id);
        $data[] = array(
          'slug' => $post->post_name,
          'post_data' => post_data($post),
          'bio' => get_field('bio', $post->ID),
          'video' => get_field('video_url', $post->ID, false, false),
          'circle_color' => get_field('circle_color', $post->ID),
          'duotone_color' => get_field('duotone_color', $post->ID),
        );
      endwhile;
    endif;
    return $data;
  }