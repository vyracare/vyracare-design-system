import type { Preview } from '@storybook/angular';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

import { storybookHierarchy } from './hierarchy';

void storybookHierarchy;

const vyracareViewports = {
  xs: {
    name: 'XS / 360px',
    styles: {
      width: '360px',
      height: '640px'
    },
    type: 'mobile'
  },
  sm: {
    name: 'SM / 576px',
    styles: {
      width: '576px',
      height: '900px'
    },
    type: 'mobile'
  },
  md: {
    name: 'MD / 768px',
    styles: {
      width: '768px',
      height: '1024px'
    },
    type: 'tablet'
  },
  lg: {
    name: 'LG / 992px',
    styles: {
      width: '992px',
      height: '1024px'
    },
    type: 'desktop'
  },
  xl: {
    name: 'XL / 1200px',
    styles: {
      width: '1200px',
      height: '1024px'
    },
    type: 'desktop'
  }
} as const;

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Introduction',
          ['Getting Started'],
          'Fundations',
          ['Heading', 'Label', 'Text', 'Icon', 'Button'],
          'Components',
          ['Card Button', 'Card', 'List'],
          'Forms',
          ['Input', 'Search', 'Date', 'Select'],
          'Styles',
          ['Grid'],
          'Design Tokens',
          ['Typography', 'Colors', 'Spacing']
        ]
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f6f7fb' },
        { name: 'dark', value: '#0b0f1a' }
      ]
    },
    viewport: {
      options: {
        ...vyracareViewports,
        iphone14: INITIAL_VIEWPORTS.iphone14,
        ipad: INITIAL_VIEWPORTS.ipad
      }
    },
    a11y: {
      test: 'error',
      options: {
        restoreScroll: true
      }
    }
  },
  initialGlobals: {
    viewport: {
      value: 'responsive',
      isRotated: false
    }
  }
};

export default preview;
