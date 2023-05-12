import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('the user has opened the app', () => {

        });

        when('the user views the events list', () => {

        });

        then(/^the default number of events displayed should be (\d+)$/, (arg0) => {

        });
    });

    test('User can change the number of events they want to see.', ({ given, when, and, then }) => {
        given('the user has opened the app', () => {

        });

        when('the user views the events list', () => {

        });

        and('the user specifies a different number of events', () => {

        });

        then('the number of events displayed should match the user\'s input', () => {

        });
    });

});