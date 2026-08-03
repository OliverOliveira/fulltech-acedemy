import { InputComponent } from "@/components/input-component";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Marker, MarkerContent } from "@/components/ui/marker";
import { ArrowUpRight } from "lucide-react";
import { SocialLoginButtons } from "./social-login-buttons";


export default function SignInPage() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="min-w-4xl flex flex-col gap-8">
                <div className="relative w-full">
                    <div className="max-w-2xs flex flex-col gap-2">
                        <h2 className="text-3xl font-extrabold">Bem-vindo</h2>
                        <p className="text-muted-foreground font-caveat text-3xl">
                            Que bom ter você de volta!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <Card className="w-full max-w-lg border-0 shadow-none bg-chart-5 p-2 rounded-4xl">
                        <CardContent className="flex flex-col gap-1 py-4">
                            <InputComponent
                                label="Email"
                                description="Digite seu email"
                                placeholder="seu@email.com"
                                type="email"
                            />
                            <InputComponent
                                label="Senha"
                                description="Digite sua senha"
                                placeholder="••••••••"
                                type="password"
                            />
                            <Button variant="link" className="self-start hover:no-underline cursor-pointer font-caveat text-2xl">
                                Esqueceu sua senha?
                            </Button>
                            <Button className="w-full h-12 rounded-lg p-2 duration-75 hover:scale-105 cursor-pointer">
                                <Label className="flex-1 justify-center">Entrar na academia</Label>
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Marker variant={"separator"}>
                                <MarkerContent>ou continue com</MarkerContent>
                            </Marker>
                            <SocialLoginButtons />
                        </CardContent>
                    </Card>
                    <div className="flex flex-col items-center">
                        <p className="text-muted-foreground">
                            Ainda não tem uma conta?
                        </p>
                        <Button variant="link" className="hover:no-underline cursor-pointer font-caveat text-2xl">
                            Criar uma conta
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
