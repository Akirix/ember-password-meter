# Ember-password-meter
An Ember-CLI wrapper for [zxcvbn](https://github.com/dropbox/zxcvbn) with a stylized password meter.

More information about zxcvbn can be found [here](https://github.com/dropbox/zxcvbn#usage).

## Installation

* Add `"ember-password-meter": "git+https://github.com/Akirix/ember-password-meter.git",` to your _package.json_ file  
* `npm install`
* `bower install zxcvbn` if it fails to install with this addon  
* Optionally, `ember install ember-validations` if you'd like to use the included `password-strength` validator.

## Usage w/example
* Add `{{password-strength password=password}}` below your password input and pass it the `value` from the input helper.

```html
    <div class="form-group col-md-6">
        <label>New Password</label>
        {{input value=password type='password' class='form-control' placeholder='New Password'}} <br />
        {{password-strength password=password}}
    </div>
</div>
```

## Validations (optional)
This addon has been designed to play nicely with [ember-validations](https://github.com/DockYard/ember-validations) with the included property, `allowBadPassword` set 
to `false` by default. This allows you to have a toggle switch/checkbox on the front end. A use case may be an administrator who wants to enable/disable the ability for users to have a bad password.

* `ember install ember-validations`
* In your controller `import EmberValidations from 'ember-validations';`  
* Add the `strongPassword` validator to your validations object for your password property:  
**Example:**

```javascript
import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend( EmberValidations.Mixin, {
    password: '',
    allowBadPassword: true,  // default is false
    
    validations: {
        password: {
            presence: true,
            strongPassword: true
        }
    },
    ...
```

# Developers

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).