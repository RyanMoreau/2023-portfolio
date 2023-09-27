import type { PageContent } from './types';
import { StarAtlas } from './sections/staratlas';
import { Element6 } from './sections/element6';
import { Bitbuy } from './sections/bitbuy';
import { Tygershark } from './sections/tygershark';
export * from './sections/hi-there'
export * from './sections/outro'
export * from './sections/studying'
export const pageContent: PageContent[] = [ 
    StarAtlas, 
    Element6, 
    Bitbuy, 
    Tygershark 
]