import IconWrapper from '@/components/common/IconWrapper'
import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { IconIds } from '@/enums'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home | fberger',
}

export default function Page() {
    return (
        <PageWrapper className="gap-5">
            {/* tldr */}
            <div className="mt-4 flex flex-col gap-2">
                <p className="font-bold text-primary">Tldr;</p>
                <ul className="flex flex-col gap-1 text-sm">
                    {[
                        '10x dev',
                        'XP in DeFi and Risk Management @CoinShares',
                        'Connecting the dots TradFi <> DeFi',
                        'Do at least a little every day - a lot if possible',
                        'In Paris 🇫🇷',
                    ].map((interest) => (
                        <li key={interest} className="flex gap-3">
                            <span className="text-inactive">&#x2022;</span>
                            <p>{interest}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* context */}
            <div className="flex flex-col gap-2">
                <p className="font-bold text-primary">Contact me</p>
                <ul className="flex flex-col gap-1 text-sm">
                    {[
                        { href: `https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`, icon: IconIds.TELEGRAM, id: `@${APP_METADATA.SOCIALS.TELEGRAM}` },
                        { href: `https://x.com/${APP_METADATA.SOCIALS.X}`, icon: IconIds.X, id: `@${APP_METADATA.SOCIALS.X}` },
                        {
                            href: `https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`,
                            icon: IconIds.LINKEDIN,
                            id: 'Francis Berger',
                        },
                    ].map((social) => (
                        <li key={social.href} className="flex gap-3">
                            <IconWrapper icon={social.icon} className="h-4 w-4" />
                            <LinkWithIcon href={social.href}>{social.id}</LinkWithIcon>
                        </li>
                    ))}
                </ul>
            </div>
        </PageWrapper>
    )
}
