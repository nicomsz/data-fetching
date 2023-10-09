'use client'
import RepositoriesContext from "@/app/contexts/RepositoriesContext";
import { useState } from "react";
import RepositoriesList from "./RepositoriesList";
import Header from "../Header/Header";
import { Repositories, Repository } from "@/app/types/Repositories";
import LoadingContext from "@/app/contexts/LoadingContext";
import { ILoading } from "@/app/types/ILoading";
import RepositoriesContextProvider from "@/app/contexts/RepositoriesContext";
import LoadingContextProvider from "@/app/contexts/LoadingContext";



export default function RepositoriesSection() {


    return (

        <RepositoriesContextProvider>
            <LoadingContextProvider>
                <Header />
                <RepositoriesList />
            </LoadingContextProvider>
        </RepositoriesContextProvider>

    )
};
