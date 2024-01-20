import { ConstructionIcon } from 'lucide-react';

export default function CustomConstructionIcon() {
    return (
        <div className="flex flex-col items-center">
            <ConstructionIcon size={200} />
            <p className="font-bold text-2xl">Under Construction</p>
        </div>
    );
}
