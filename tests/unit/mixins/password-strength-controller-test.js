import Ember from 'ember';
import PasswordStrengthControllerMixin from 'ember-password-meter/mixins/password-strength-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | password strength controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let PasswordStrengthControllerObject = Ember.Object.extend(PasswordStrengthControllerMixin);
  let subject = PasswordStrengthControllerObject.create();
  assert.ok(subject);
});
