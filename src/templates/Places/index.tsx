import { CloseOutline } from "@styled-icons/evaicons-outline"
import LinkWrapper from "components/LinkWrapper"
import Image from 'next/image';
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";

import * as S from "./styles"

type ImageProps = {
  url: string;
  height: number;
  width: number;
}

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
      text: string;
    }
    gallery: ImageProps[];
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter();

  if(router.isFallback) return null

  return (
    <>
     <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'Um simples projeto para mostrar no mapa os melhores lugares que ja visitei.'
        }
        canonical="https://mytrips.com"
        openGraph={{
          url: 'https://mytrips.com',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'Um simples projeto para mostrar no mapa os melhores lugares que ja visitei.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href='/'>
        <CloseOutline size={32} aria-label="De volta ao mapa" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body dangerouslySetInnerHTML={{ __html: place.description?.html || '' }} />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image key={`photo-${index}`} src={image.url} alt={place.name} width={1000} height={600} quality={75} />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>

  )
}


