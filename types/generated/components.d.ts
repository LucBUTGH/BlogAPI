import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleSource extends Struct.ComponentSchema {
  collectionName: 'components_article_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ArticleTag extends Struct.ComponentSchema {
  collectionName: 'components_article_tags';
  info: {
    description: '';
    displayName: 'Tag';
    icon: 'priceTag';
  };
  attributes: {
    category: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.source': ArticleSource;
      'article.tag': ArticleTag;
    }
  }
}
