import React from 'react';
import BlurFade from '@/components/ui/blur-fade';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReviewSectionProps {
    title: string;
    content?: string;
    items?: string[];
    icon: string;
    indent?: boolean;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ title, content, items, icon, indent }) => (
    <Card className={`mb-8 ${indent ? 'ml-6' : ''}`}>
        <CardHeader>
            <CardTitle className="flex items-center">
                <span className="mr-2">{icon}</span>
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            {content && <p className="mb-2 dark:text-gray-500 text-gray-700">{content}</p>}
            {Array.isArray(items) && items.length > 0 ? (
                title.toLowerCase().includes('skills') ? (
                    <div className="flex flex-wrap gap-2">
                        {items.map((item, index) => (
                            <Badge key={index} variant="secondary">
                                {item}
                            </Badge>
                        ))}
                    </div>
                ) : (
                    <ul className="list-disc pl-5 dark:text-gray-500 text-gray-700">
                        {items.map((item, index) => (
                            <li key={index} className="mb-1">{item}</li>
                        ))}
                    </ul>
                )
            ) : (!content && <p className="text-gray-500 italic">No information available.</p>)}
        </CardContent>
    </Card>
);

export default ReviewSection;