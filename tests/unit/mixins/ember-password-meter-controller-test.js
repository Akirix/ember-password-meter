import Ember from 'ember';
import EmberPasswordMeterControllerMixin from 'ember-password-meter/mixins/ember-password-meter-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | ember password meter controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let EmberPasswordMeterControllerObject = Ember.Object.extend(EmberPasswordMeterControllerMixin);
  let subject = EmberPasswordMeterControllerObject.create();
  assert.ok(subject);
});
