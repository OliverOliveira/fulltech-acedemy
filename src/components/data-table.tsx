"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Eye, MoreVertical } from "lucide-react";
import { getInitials } from "@/lib/utils";

export type UserRole = "Aluno" | "Professor";
export type UserStatus = "Ativo" | "Inativo";

export interface DataTableUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string; // já formatado, ex: "12/05/2024"
  lastAccess: string; // já formatado, ex: "Hoje, 09:15"
}

interface DataTableProps {
  users: DataTableUser[];
  page: number;
  pageSize: number;
  totalUsers: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  onViewProfile?: (user: DataTableUser) => void;
  onEdit?: (user: DataTableUser) => void;
  onDelete?: (user: DataTableUser) => void;
}

const roleStyles: Record<UserRole, string> = {
  Aluno: "bg-indigo-100 text-indigo-700 hover:bg-indigo-100",
  Professor: "bg-amber-100 text-amber-700 hover:bg-amber-100",
};

const statusStyles: Record<UserStatus, string> = {
  Ativo: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  Inativo: "bg-rose-100 text-rose-700 hover:bg-rose-100",
};

// Gera algo como [1, 2, 3, "...", 255]
function buildPageList(page: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, 2, 3, totalPages]);
  if (page > 1 && page < totalPages) {
    pages.add(page);
    if (page - 1 > 1) pages.add(page - 1);
    if (page + 1 < totalPages) pages.add(page + 1);
  }

  const sorted = Array.from(pages).sort((a, b) => a - b);
  const result: (number | "ellipsis")[] = [];

  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) {
      result.push("ellipsis");
    }
    result.push(p);
  });

  return result;
}

export function DataTable({
  users,
  page,
  pageSize,
  totalUsers,
  onPageChange,
  onPageSizeChange,
  onViewProfile,
  onEdit,
  onDelete,
}: DataTableProps) {
  const totalPages = Math.max(1, Math.ceil(totalUsers / pageSize));
  const firstItem = totalUsers === 0 ? 0 : (page - 1) * pageSize + 1;
  const lastItem = Math.min(page * pageSize, totalUsers);
  const pageList = buildPageList(page, totalPages);

  return (
    <div className="w-full rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-amber-50/60 hover:bg-amber-50/60">
            <TableHead className="text-muted-foreground">Usuário</TableHead>
            <TableHead className="text-muted-foreground">Função</TableHead>
            <TableHead className="text-muted-foreground">Status</TableHead>
            <TableHead className="text-muted-foreground">Data de cadastro</TableHead>
            <TableHead className="text-muted-foreground">Último acesso</TableHead>
            <TableHead className="text-right text-muted-foreground">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium leading-none">{user.name}</span>
                    <span className="text-sm text-muted-foreground">{user.email}</span>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <Badge className={roleStyles[user.role]} variant="secondary">
                  {user.role}
                </Badge>
              </TableCell>

              <TableCell>
                <Badge className={statusStyles[user.status]} variant="secondary">
                  {user.status}
                </Badge>
              </TableCell>

              <TableCell className="text-muted-foreground">{user.createdAt}</TableCell>
              <TableCell className="text-muted-foreground">{user.lastAccess}</TableCell>

              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onViewProfile?.(user)}
                  >
                    <Eye className="mr-1.5 h-4 w-4" />
                    Ver perfil
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8" />}>
                        <MoreVertical className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit?.(user)}>
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => onDelete?.(user)}
                        className="text-destructive focus:text-destructive"
                      >
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col gap-3 border-t p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Select
            value={String(pageSize)}
            onValueChange={(v) => onPageSizeChange(Number(v))}
          >
            <SelectTrigger className="h-8 w-27.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 por página</SelectItem>
              <SelectItem value="25">25 por página</SelectItem>
              <SelectItem value="50">50 por página</SelectItem>
            </SelectContent>
          </Select>

          <span>
            Mostrando {firstItem} a {lastItem} de {totalUsers.toLocaleString("pt-BR")} usuários
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {pageList.map((p, i) =>
            p === "ellipsis" ? (
              <span key={`ellipsis-${i}`} className="px-1.5 text-muted-foreground">
                ...
              </span>
            ) : (
              <Button
                key={p}
                variant={p === page ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                onClick={() => onPageChange(p)}
              >
                {p}
              </Button>
            )
          )}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}