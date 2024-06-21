import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import truckImage from '../assets/images/trucks1.png'; // Adjust the path as per your project structure

function CarouselComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {/* Conditionally render image or text based on index */}
                    {index === 2 ? (
                      <img src={truckImage} alt="Truck" className="max-w-full max-h-full" />
                    ) : (
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
