import translator from './pig-latin';

describe('Pig Latin', () => {
  test('translates a word beginning with a', () => {
    expect(translator.translate('apple')).toEqual('appleay');
  });

  test('translates a word beginning with e', () => {
    expect(translator.translate('ear')).toEqual('earay');
  });

  test('translates a word beginning with p', () => {
    expect(translator.translate('pig')).toEqual('igpay');
  });

  test('translates a word beginning with k', () => {
    expect(translator.translate('koala')).toEqual('oalakay');
  });

  test('translates a word beginning with ch', () => {
    expect(translator.translate('chair')).toEqual('airchay');
  });

  test('translates a word beginning with qu', () => {
    expect(translator.translate('queen')).toEqual('eenquay');
  });

  test('translates a word with a consonant preceding qu', () => {
    expect(translator.translate('square')).toEqual('aresquay');
  });

  xtest('translates a word beginning with th', () => {
    expect(translator.translate('therapy')).toEqual('erapythay');
  });

  xtest('translates a word beginning with thr', () => {
    expect(translator.translate('thrush')).toEqual('ushthray');
  });

  xtest('translates a word beginning with sch', () => {
    expect(translator.translate('school')).toEqual('oolschay');
  });

  xtest('translates a phrase', () => {
    expect(translator.translate('quick fast run'))
      .toEqual('ickquay astfay unray');
  });
});
