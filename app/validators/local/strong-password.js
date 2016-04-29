import Base from 'ember-validations/validators/base';

export default Base.extend( {

    call: function(){
        var password = this.model.get( this.property );
        var passwordLength = 8;
        var allowBadPassword = this.model.get( 'allowBadPassword' );

        if( !allowBadPassword ){
            // Check length (custom for easy integration with other applications)
            if( password.length < passwordLength ){
                this.errors.pushObject( 'is too short (minimum is ' + passwordLength + ' characters)' );
            }
            // Check for lowercase letters
            if( !/[a-z]/.test( password ) ){
                this.errors.pushObject( 'Must contain at least one lowercase letter' );
            }
            // Check for uppercase letters
            if( !/[A-Z]/.test( password ) ){
                this.errors.pushObject( 'Must contain at least one uppercase letter' );
            }
            // Check for number
            if( !/\d/.test( password ) ){
                this.errors.pushObject( 'Must contain one number' );
            }
        }
    }
} );