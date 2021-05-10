import { initialState, ActionName } from '../store';
import {
  handleInitDependants,
  handleRemoveDependants,
  handleInitAlimonyDependants,
  handleRemoveAlimonyDependants,
  handleUCreatePartner,
  handleRemovePartner,
} from './core-family';
import { createPartner, createPerson } from '../../typing';

describe('Core Family Reducers', () => {
  describe('handleInitDependants', () => {
    const action = {
      type: ActionName.InitDependants,
      payload: {},
    };
    it('adds an empty person to dependants', () => {
      const newState = handleInitDependants(initialState, action);
      expect(newState.declarant.dependants.length).toEqual(1);
    });

    describe('when the dependants is not empty.', () => {
      it('does not add an extra dependent.', () => {
        const state = { ...initialState };
        const person = createPerson();
        const nickname = 'Nutelinha';
        person.nickName = nickname;
        state.declarant.dependants = [person];

        const newState = handleInitDependants(state, action);
        expect(newState.declarant.dependants.length).toEqual(1);
        expect(newState.declarant.dependants[0].nickName).toEqual(nickname);
      });
    });
  });

  describe('handleRemoveDependants', () => {
    const action = {
      type: ActionName.RemoveDependants,
      payload: {},
    };
    it('makes dependants an empty array.', () => {
      const state = { ...initialState };
      state.declarant.dependants = [createPartner()];

      const newState = handleRemoveDependants(initialState, action);
      expect(newState.declarant.dependants.length).toEqual(0);
    });
  });

  describe('handleRemoveAlimonyDependants', () => {
    const action = {
      type: ActionName.RemoveAlimonyDependants,
      payload: {},
    };

    it('makes alimonyDependants an empty array.', () => {
      const state = { ...initialState };
      const person = createPerson();
      state.alimonyDependants = [person];

      const newState = handleRemoveAlimonyDependants(initialState, action);
      expect(newState.alimonyDependants.length).toEqual(0);
    });
  });

  describe('handleInitAlimonyDependants', () => {
    const action = {
      type: ActionName.InitAlimonyDependants,
      payload: {},
    };

    it('adds an empty person to the alimony Dependants array.', () => {
      const newState = handleInitAlimonyDependants(initialState, action);
      expect(newState.alimonyDependants.length).toEqual(1);
    });

    describe('when the dependants is not empty.', () => {
      it('does not add an extra dependent.', () => {
        const state = { ...initialState };
        const person = createPerson();
        const nickname = 'Nutelinha';
        person.nickName = nickname;
        state.alimonyDependants = [person];

        const newState = handleInitAlimonyDependants(state, action);
        expect(newState.alimonyDependants.length).toEqual(1);
        expect(newState.alimonyDependants[0].nickName).toEqual(nickname);
      });
    });
  });

  describe('handleUCreatePartner', () => {
    const action = {
      type: ActionName.CreatePartner,
      payload: {},
    };
    it('creates an empty partner', () => {
      const newState = handleUCreatePartner(initialState, action);
      expect(newState.declarant.partner).not.toBeUndefined();
    });

    describe('when the partner already exists', () => {
      it('does not override the current partner', () => {
        const state = { ...initialState };
        const nickname = 'Mariola';
        state.declarant.partner = createPartner();
        state.declarant.partner.nickName = nickname;
        const newState = handleUCreatePartner(state, action);
        expect(newState.declarant.partner.nickName).toEqual(nickname);
      });
    });
  });

  describe('handleRemovePartner', () => {
    const action = {
      type: ActionName.RemovePartner,
      payload: {},
    };

    it('removes the partner', () => {
      const state = { ...initialState };
      state.declarant.partner = createPartner();
      const newState = handleRemovePartner(state, action);
      expect(newState.declarant.partner).toBeUndefined();
    });
  });
});
