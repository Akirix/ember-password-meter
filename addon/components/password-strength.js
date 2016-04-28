import Ember from 'ember';
import layout from '../templates/components/password-strength';

const { Component, computed } = Ember;

export default Component.extend( {
    layout,
    password: '',
    allowBadPassword: false,

    strength: computed( 'password', function(){
        return zxcvbn( this.get( 'password' ) );
    } ),

    meter: Ember.observer( 'password', function(){
        var score = this.get( 'strength.score' );
        if( score !== 4 ){
            this.$( '.strength' ).css( 'box-shadow', 'inset 0 1px 2px rgba(0, 0, 0, .1)' );
        }
        if( score === 1 ){
            this.$( '#strength-meter' ).css( { 'width': '25%', 'background-color': '#f00' } );
        }
        else if( score === 2 ){
            this.$( '#strength-meter' ).css( { 'width': '50%', 'background-color': '#FFA500' } );
        }
        else if( score === 3 ){
            this.$( '#strength-meter' ).css( { 'width': '75%', 'background-color': '#D6FF00' } );
        }
        else if( score === 4 ){
            this.$( '#strength-meter' ).css( { 'width': '100%', 'background-color': '#35BD09' } );
            this.$( '.strength' ).css( 'box-shadow', '0px 0px 3px 2.5px #C3FFAF' );
        }
        else{
            this.$( '#strength-meter' ).css( { 'width': '8%', 'background-color': '#D00000' } );
        }
    } )
} );