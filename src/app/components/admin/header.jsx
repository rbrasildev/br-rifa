import Image from 'next/image';
export default function Header() {
    return (
        <header className='ml-[280px] bg-white flex justify-end'>
            <Image
                className='rounded-full p-2'
                src="/assets/avatar.png"
                width={64}
                height={64}
                alt="BR Rifas"
            />
        </header>
    )
}