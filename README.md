# Ember-password-meter


An Ember-CLI wrapper for [zxcvbn](https://github.com/dropbox/zxcvbn) with a stylized password meter.

More information about zxcvbn can be found [here](https://github.com/dropbox/zxcvbn#usage).

## Installation

* Add `"ember-password-meter": "git+https://github.com/Akirix/ember-password-meter.git",` to your _packge.json_ file  
* `bower install zxcvbn` if it fails to install with this addon  

## Usage w/example  
Simply add `{{password-strength password=password}}` below your password input and pass it the `value` from the input helper.
You can also 

```html
    <div class="form-group col-md-6">
        <label>New Password</label>
        {{input value=password type='password' class='form-control' placeholder='New Password'}} <br />
        {{password-strength password=password}}
    </div>
</div>
```

This addon has also been designed to play nicely with [ember-validations](https://github.com/DockYard/ember-validations) with the included property, `allowBadPassword` set 
to false by default. You can override this to be `true` to bypass validations during development.  

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
