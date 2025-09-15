import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Tasks } from '@/components/Tasks';

export const App = () => {
    return (
        <div className='min-h-screen min-w-screen flex flex-col'>
            {/* 100vh y columna */}
            <Header />
            <main className='flex-1'>
                {/* ocupa el hueco */}
                <Tasks />
            </main>
            <Footer />
        </div>
    );
};
