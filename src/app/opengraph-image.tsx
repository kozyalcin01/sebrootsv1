import { ImageResponse } from 'next/og';

export const alt = 'Sobroots — Carry Your Roots';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Google Fonts'tan .woff/.ttf formatında font getirmek için örnek fetch kullanımı (edge compatibility için gstatic ttf linki)
  const fontData = await fetch(
    new URL('https://fonts.gstatic.com/s/cormorantgaramond/v15/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrHtmaQ.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer()).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Sol tarafta büyük dekoratif metin */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 320,
            color: 'rgba(255,255,255,0.04)',
            fontFamily: fontData ? '"Cormorant Garamond"' : 'serif',
            margin: 0,
            lineHeight: 1,
          }}
        >
          S
        </div>

        {/* Sağ alt köşede ince çizgi detayı */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 80,
            width: 80,
            height: 1,
            background: 'rgba(137,168,178,0.3)',
          }}
        />

        {/* Sağ tarafta soyut kutu efekti */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 260,
            height: 380,
            border: '1px solid rgba(137,168,178,0.15)',
          }}
        />

        {/* Merkez içerik */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 4,
              color: '#89A8B2',
              textTransform: 'uppercase',
            }}
          >
            EST. 2021
          </div>

          <div
            style={{
              fontSize: 88,
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: 6,
              fontFamily: fontData ? '"Cormorant Garamond"' : 'serif',
              marginTop: 16,
            }}
          >
            Sobroots
          </div>

          <div
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: 3,
              marginTop: 16,
            }}
          >
            Carry Your Roots
          </div>

          <div
            style={{
              width: 48,
              height: 1,
              background: '#89A8B2',
              marginTop: 40,
            }}
          />

          <div
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.3)',
              marginTop: 16,
            }}
          >
            El yapımı deri çantalar · Sınırlı üretim
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: 'Cormorant Garamond',
              data: fontData,
              style: 'normal',
              weight: 300,
            },
          ]
        : undefined,
    }
  );
}
