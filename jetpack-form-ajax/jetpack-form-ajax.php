<?php
/*
Plugin Name: Jetpack Form Ajax
Description: Send Jetpack contact forms via AJAX rather then with a postback
Author: @willj
*/

function jfa_enqueue_scripts(){
    wp_enqueue_script( 'jfa_scripts', plugins_url( 'jetpackFormAjax.js', __FILE__ ), array('jquery') );    
    wp_enqueue_style( 'jfa_styles', plugins_url( 'jetpackFormAjax.css', __FILE__ ) );    
}
add_action( 'wp_enqueue_scripts', 'jfa_enqueue_scripts' );

function jfa_success_message(){
    return '<p class="jetpack-form-ajax-success-message">Message sent</p>';
}
add_filter( 'grunion_contact_form_success_message', 'jfa_success_message' );

?>