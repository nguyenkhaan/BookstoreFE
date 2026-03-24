import { DollarSign } from 'lucide-react';
import { Card , CardContent  } from '../../../components/ui/card';
import { TrendingUp } from 'lucide-react';
function StatCard({
    index = 1, 
    title = 'Tổng doanh thu',
    value = '245,680,000đ',
    change = '+12.5%',
    icon : Icon = DollarSign,
    color = 'text-green-600',
    bgColor = 'bg-green-100',
}) {
    
    return (
        <Card
            key={index}
            className="border-0 shadow-md hover:shadow-lg transition-shadow"
        >
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">
                            {title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                            {value}
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600 font-medium">
                                {change}
                            </span>
                        </div>
                    </div>
                    <div
                        className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}
                    >
                        <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
export default StatCard;

// title: 'Tổng doanh thu',
// value: '245,680,000đ',
// change: '+12.5%',
// icon: DollarSign,
// color: 'text-green-600',
// bgColor: 'bg-green-100',