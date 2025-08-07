import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

type SalesCategoryItem = {
  category: string;
  sales: number;
  fill: string;
};
const salesCategoryData: SalesCategoryItem[] = [
  { category: "electronics", sales: 450000, fill: "var(--color-electronics)" },
  { category: "clothing", sales: 320000, fill: "var(--color-clothing)" },
  { category: "home", sales: 280000, fill: "var(--color-home)" },
  { category: "books", sales: 150000, fill: "var(--color-books)" },
  { category: "sports", sales: 220000, fill: "var(--color-sports)" },
];

// Sales Category Config
const salesCategoryConfig = {
  electronics: {
    label: "Electronics",
    color: "var(--chart-1)",
  },
  clothing: {
    label: "Clothing",
    color: "var(--chart-2)",
  },
  home: {
    label: "Home & Garden",
    color: "var(--chart-3)",
  },
  books: {
    label: "Books",
    color: "var(--chart-4)",
  },
  sports: {
    label: "Sports",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export const AppPieChart = () => {
  const totalSales = useMemo(() => {
    return salesCategoryData.reduce((acc, curr) => acc + curr.sales, 0);
  }, []);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Sales</h1>
      <ChartContainer
        config={salesCategoryConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={salesCategoryData}
            dataKey="sales"
            nameKey="category"
            innerRadius={80}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalSales.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Sales
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total sales for the last 6 months
        </div>
      </div>
    </div>
  );
};
