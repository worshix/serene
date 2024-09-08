// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Activity Image documents
 */
interface ActivityImageDocumentData {
  /**
   * Image field in *Activity Image*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: activity_image.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Activity Description field in *Activity Image*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Brief activity description
   * - **API ID Path**: activity_image.activity_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  activity_description: prismic.KeyTextField;
}

/**
 * Activity Image document from Prismic
 *
 * - **API ID**: `activity_image`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ActivityImageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ActivityImageDocumentData>,
    "activity_image",
    Lang
  >;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Blog title
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Paragraph field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Blog Paragraph
   * - **API ID Path**: blog.paragraph
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraph: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Content for Ordinary Images documents
 */
interface OrdinaryImagesDocumentData {
  /**
   * Image field in *Ordinary Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: ordinary_images.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Ordinary Images document from Prismic
 *
 * - **API ID**: `ordinary_images`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type OrdinaryImagesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<OrdinaryImagesDocumentData>,
    "ordinary_images",
    Lang
  >;

/**
 * Content for Testimonials documents
 */
interface TestimonialsDocumentData {
  /**
   * Image field in *Testimonials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Testimony field in *Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Brief testimonial
   * - **API ID Path**: testimonials.testimony
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimony: prismic.KeyTextField;

  /**
   * Author field in *Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Author of the testimony
   * - **API ID Path**: testimonials.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;
}

/**
 * Testimonials document from Prismic
 *
 * - **API ID**: `testimonials`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TestimonialsDocumentData>,
    "testimonials",
    Lang
  >;

export type AllDocumentTypes =
  | ActivityImageDocument
  | BlogDocument
  | OrdinaryImagesDocument
  | TestimonialsDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ActivityImageDocument,
      ActivityImageDocumentData,
      BlogDocument,
      BlogDocumentData,
      OrdinaryImagesDocument,
      OrdinaryImagesDocumentData,
      TestimonialsDocument,
      TestimonialsDocumentData,
      AllDocumentTypes,
    };
  }
}
