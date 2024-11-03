import { APP_METADATA } from '@/config/app.config'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: APP_METADATA.SITE_URL,
        short_name: APP_METADATA.SITE_NAME,
        description: APP_METADATA.SITE_DESCRIPTION,
        lang: 'en',
        start_url: '/',
    }
}
