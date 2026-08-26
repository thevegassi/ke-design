import * as React from 'react';

/** 2560×1440 channel-art canvas with the platform's published safe-area guides overlaid. */
export interface BannerImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background photo URL; automatically darkened 50%. */
  image?: string;
  /** Headline set in Inter Light. Default the brand tagline. */
  headline?: string;
  /** Show the safe-area guide overlay. Default true — set false to export the artwork. */
  guides?: boolean;
  /** Render the 2560-wide canvas at a fraction of full size. Default 1. */
  scale?: number;
  /** Ground behind the photo. Default the deck gradient. */
  background?: string;
}
export declare function BannerImage(props: BannerImageProps): JSX.Element;
export default BannerImage;
