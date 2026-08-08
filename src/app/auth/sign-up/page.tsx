"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "@/components/input-component";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Marker, MarkerContent } from "@/components/ui/marker";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { SocialLoginButtons } from "../social-login-buttons";
import Link from "next/link";

const loginSchema = z.object({
  name: z.string().min(1, "Digite seu nome"),
  email: z.email("Digite um email válido").min(1, "Digite seu email"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const route = useRouter()

  const onSubmit = async (data: LoginFormData) => {
    const { error } = await authClient.signIn.email(data)
    if (error) {
      console.error(error)
      return
    }
    route.push("/")
  }

  return (
    <div className="flex items-center justify-center w-full h-full relative">

      <div className="min-w-4xl flex flex-col gap-8">
        <div className="relative w-full">
          <div className="max-w-2xs flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold w-fit relative">
              <svg
                width="48"
                height="46"
                viewBox="0 0 48 46"
                fill="none"
                className="absolute -top-4 -right-8 text-black"
              >
                <path d="M2.00043 20.0005L6.00043 2.00049M18.0004 28.5005L34.0004 13.0005M26.5004 43.5005L46.0004 41.5005" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
              Bem-vindo
            </h2>
            <p className="text-muted-foreground font-caveat text-3xl">
              Que bom ter você de &nbsp;
              <span className="relative">
                <svg
                  width="94"
                  height="52"
                  viewBox="0 0 94 52"
                  fill="none"
                  className="absolute text-accent -top-1 -left-3 scale-90"
                >
                  <path d="M77.0019 41.3778L29.0019 44.3778C29.0019 44.3778 12.6758 44.6256 6.50186 37.8778C3.25978 34.3343 0.924614 31.68 1.00186 26.8778C1.09245 21.2463 4.44005 18.1811 9.00186 14.8778C18.5 8 25.3302 5.05546 37.0019 2.37778C50.5144 -0.722231 72.5019 2.37778 72.5019 2.37778C72.5019 2.37778 85.1469 3.84623 89.5019 9.37793C91.7225 12.1986 92.9311 13.2886 93.0019 16.8778C93.0762 20.6482 91.9703 23.0267 89.5019 25.8778C85.5 30.5 71.5996 35.9273 59.0018 40.3778C42.3849 46.2482 15.5018 50.3778 15.5018 50.3778" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                volta!
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Card className="w-full max-w-lg border-0 shadow-none bg-chart-5 p-2 rounded-4xl">
            <CardContent className="flex flex-col gap-1 py-4">
              <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                  label="Nome Completo"
                  description={errors.name?.message ?? ""}
                  placeholder="Seu nome completo"
                  {...register("name")}
                />
                <InputComponent
                  label="Email"
                  description={errors.email?.message ?? ""}
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                <InputComponent
                  label="Senha"
                  description={errors.password?.message ?? ""}
                  placeholder="••••••••"
                  type="password"
                  {...register("password")}
                />
                <Button type="button" variant="link" className="self-start hover:no-underline cursor-pointer font-caveat text-2xl">
                  Esqueceu sua senha?
                </Button>
                <Button type="submit" className="w-full h-12 rounded-lg p-2 duration-75 hover:scale-105 cursor-pointer">
                  <Label className="flex-1 justify-center cursor-pointer">Entrar na academia</Label>
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <Marker variant={"separator"}>
                <MarkerContent>ou continue com</MarkerContent>
              </Marker>
              <SocialLoginButtons alignment="horizontal" />
            </CardContent>
          </Card>
          <div className="flex flex-col items-center">
            <p className="text-muted-foreground">
              Ainda não tem uma conta?
            </p>
            <Link href="/auth">
              <Button variant="link" className="hover:no-underline cursor-pointer font-caveat text-2xl">
                Fazer login
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* SVG Decorations Login Page */}
      <div className="absolute -top-24 right-1/4 w-72 h-72">
        <div className="relative w-full h-full flex justify-center items-center">
          <svg
            width="303"
            height="285"
            viewBox="0 0 303 285"
            fill="none"
            className="absolute top-0 left-0 text-ring"
          >
            <path d="M41.0298 36.0894C35.7166 43.8891 34.75 49.4161 31.0298 58.0894C26.2272 69.286 25.0537 76.2305 19.5298 87.0894C14.1994 97.5679 7.1173 101.394 3.52978 112.589C0.476341 122.118 -0.0864123 128.146 1.02978 138.089C2.40909 150.377 6.66057 156.706 12.5298 167.589C18.4449 178.558 21.6273 185.411 31.0298 193.589C38.6866 200.249 44.2794 202.416 53.5298 206.589C62.3668 210.576 68.1874 210.615 77.0298 214.589C84.7622 218.065 89.3968 219.81 96.0298 225.089C105.168 232.363 107.032 239.634 114.53 248.589C122.253 257.815 125.168 264.697 135.03 271.589C144.214 278.008 150.558 280.315 161.53 282.589C173.384 285.047 180.697 285.148 192.53 282.589C207.641 279.322 216.168 274.574 227.53 264.089C234.477 257.678 238.256 253.522 242.53 245.089C246.92 236.428 247.231 230.632 249.03 221.089C250.523 213.164 249.27 208.331 251.53 200.589C253.513 193.795 255.427 190.182 259.03 184.089C264.324 175.137 269.742 171.874 276.03 163.589C284.968 151.813 291.92 145.963 297.03 132.089C300.736 122.027 301.995 115.813 302.03 105.089C302.065 94.174 300.826 87.8233 297.03 77.5894C294.022 69.4804 292.016 64.7756 286.53 58.0894C278.319 48.0834 271.395 43.4142 259.03 39.5894C246.345 35.6657 238.297 39.0653 225.03 39.5894C210.739 40.1539 202.762 44.0055 188.53 42.5894C177.738 41.5155 170.747 41.8049 161.53 36.0894C152.584 30.5422 152.205 22.2201 144.03 15.5894C135.751 8.87474 130.33 5.33149 120.03 2.58938C108.708 -0.424514 101.465 0.041312 90.0298 2.58938C78.4352 5.17295 72.3103 8.84774 62.5298 15.5894C52.9778 22.1734 47.5612 26.5014 41.0298 36.0894Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" />
          </svg>

          <p className="font-caveat text-2xl z-10 max-w-2/3">Acesse sua conta e continue aprendendo sem limites.</p>
        </div>
      </div>

      <div className="absolute bottom-24 right-14 w-72 h-72">
        <div className="relative w-full h-full flex justify-center items-center">
          <svg
            width="190"
            height="247"
            viewBox="0 0 190 247"
            fill="none"
            className="absolute top-0 left-0 text-secondary w-full h-full"
          >
            <path d="M8.05473 57.8321C6.50552 71.631 11.761 79.5517 10.0547 93.3321C8.9432 102.309 4.55473 115.832 4.55473 115.832C4.55473 115.832 -0.050271 134.028 0.554728 145.832C1.20439 158.507 3.60463 165.645 8.55473 177.332C13.3742 188.711 17.0192 194.944 25.0547 204.332C35.4674 216.497 43.3046 222.029 57.5547 229.332C69.7403 235.577 77.5278 237.315 90.8298 240.282L91.0547 240.332C99.5456 242.226 104.384 243.121 113.055 243.832C122.396 244.598 128.372 247.362 137.055 243.832C141.12 242.18 143.496 240.978 146.555 237.832C150.511 233.762 149.568 229.311 153.055 224.832C157.326 219.346 161.679 218.241 167.055 213.832C172.622 209.266 176.982 207.771 181.055 201.832C186.626 193.708 185.717 187.091 187.055 177.332C188.805 164.564 189.077 157.06 187.055 144.332C185.657 135.537 181.378 131.232 181.055 122.332C180.629 110.592 188.53 105.069 189.055 93.3321C189.605 81.0135 188.153 73.5595 183.055 62.3321C179.673 54.8862 177.72 50.2042 171.555 44.8321C166.09 40.0704 161.898 38.7216 155.055 36.3321C148.836 34.1606 144.918 34.5346 138.555 32.8321C132.411 31.1882 128.728 30.7083 123.055 27.8321C116.227 24.3703 113.892 20.1267 107.555 15.8321C100.457 11.0222 96.5971 7.80357 88.5547 4.83208C80.3636 1.80562 75.277 1.25157 66.5547 0.832083C58.5368 0.44647 53.7122 -0.0758539 46.0547 2.33208C36.9104 5.20756 32.289 9.01028 25.5547 15.8321C20.3402 21.1144 17.8694 24.6908 14.5547 31.3321C9.79617 40.8662 9.24357 47.243 8.05473 57.8321Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" />
          </svg>

          <div className="font-caveat text-2xl z-10 max-w-2/4">
            <p>Educação que transforma.</p>
            <p>Tecnologia que conecta.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
