import { formatName, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


interface TestimonialsProps {
    avatar: string;
    name: string;
    testimonial: string;
}

export default function TestimonialsCard({ avatar, name, testimonial }: TestimonialsProps) {
    return (
        <div className="flex flex-col gap-4 px-4 pb-2">
            <Avatar size="lg">
                <AvatarImage src={avatar} />
                <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-4">
                <p className="font-caveat text-xl font-bold">
                    &quot;{testimonial}&quot;
                </p>
                <p>- {formatName(name)}</p>
            </div>
        </div>
    );
}