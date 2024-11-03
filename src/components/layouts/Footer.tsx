import { cn } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { APP_METADATA } from '@/config/app.config'
import IconWrapper from '../common/IconWrapper'
import { IconIds } from '@/enums'

interface FooterProps {
    className?: string
}

export default function Footer(props: FooterProps) {
    return (
        <div className={cn('fixed bottom-0 w-full flex justify-end text-sm z-0', props.className)}>
            <div className="flex items-end gap-4 rounded-ss-xl bg-background px-3 py-1 text-default opacity-80 backdrop-blur-sm">
                <LinkWrapper target="_blank" href={`https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`} className="hover:text-primary">
                    <IconWrapper icon={IconIds.TELEGRAM} className="h-5 w-5" />
                </LinkWrapper>
                <LinkWrapper target="_blank" href={`https://x.com/${APP_METADATA.SOCIALS.TWITTER}`} className="hover:text-primary">
                    <IconWrapper icon={IconIds.X} className="h-5 w-5" />
                </LinkWrapper>
                <LinkWrapper target="_blank" href={`https://github.com/${APP_METADATA.SOCIALS.GITHUB}`} className="hover:text-primary">
                    <IconWrapper icon={IconIds.GITHUB} className="h-5 w-5" />
                </LinkWrapper>
                <LinkWrapper target="_blank" href={`https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`} className="hover:text-primary">
                    <IconWrapper icon={IconIds.LINKEDIN} className="h-5 w-5" />
                </LinkWrapper>
            </div>
        </div>
    )
}
