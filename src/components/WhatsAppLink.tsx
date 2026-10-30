import { whatsapp } from '@/data/business';
import Icon from './Icon';
export default function WhatsAppLink({ children, message, className = 'button button-primary' }: { children: React.ReactNode; message?: string; className?: string }) {
  return <a href={whatsapp(message)} className={className} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" />{children}</a>;
}
