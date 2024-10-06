// import OpenAI from 'https://deno.land/x/openai@v4.63.0/mod.ts';

import OpenAI from 'openai';
import { API_OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: API_OPENAI_KEY, 
  dangerouslyAllowBrowser: true
});

export default openai;