import { Radix } from "@/components";
import { Heart, Eye, Download } from "lucide-react";

export interface SchematicCardProps {
    id: string;
    title: string;
    description: string;
    author: string;
    likes: number;
    downloads: number;
    views: number;
    imageUrl?: string;
}

export function SchematicCard({ title, description, author, likes, downloads, views, imageUrl }: SchematicCardProps) {
    return (
        <Radix.Card className="group overflow-hidden border-0 shadow-sm">
            {/* Image Container */}
            <div className="bg-muted relative -mx-6 -mt-6 aspect-video overflow-hidden rounded-xl">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="from-muted/80 to-muted flex h-full w-full items-center justify-center bg-gradient-to-br">
                        <span className="text-muted-foreground text-sm">原理图预览</span>
                    </div>
                )}
                {/* Gradient Overlay */}
                <div className="from-background/80 via-background/40 absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t to-transparent" />
            </div>

            {/* Content */}
            <Radix.CardHeader className="space-y-2 p-4 pt-3">
                <Radix.CardTitle className="line-clamp-1 text-base font-semibold">{title}</Radix.CardTitle>
                <Radix.CardDescription className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                    {description}
                </Radix.CardDescription>
            </Radix.CardHeader>

            {/* Footer with Author and Stats */}
            <Radix.CardFooter className="flex items-center justify-between border-0 bg-transparent p-4 pt-3">
                <div className="flex items-center gap-2">
                    <div className="bg-primary/10 flex size-6 items-center justify-center rounded-full">
                        <span className="text-primary text-xs font-medium">{author.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{author}</span>
                </div>

                <div className="text-muted-foreground flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                        <Heart className="size-4" />
                        <span className="text-xs">{likes > 999 ? `${(likes / 1000).toFixed(1)}k` : likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Download className="size-4" />
                        <span className="text-xs">{downloads > 999 ? `${(downloads / 1000).toFixed(1)}k` : downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="size-4" />
                        <span className="text-xs">{views > 999 ? `${(views / 1000).toFixed(1)}k` : views}</span>
                    </div>
                </div>
            </Radix.CardFooter>
        </Radix.Card>
    );
}
