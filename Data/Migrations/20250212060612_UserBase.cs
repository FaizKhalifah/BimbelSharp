using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bimbelsharp.Data.Migrations
{
    /// <inheritdoc />
    public partial class UserBase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Teachers",
                newName: "HashedPassword");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Students",
                newName: "HashedPassword");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Admins",
                newName: "HashedPassword");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Admins",
                newName: "FullName");

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "Teachers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "Teachers",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Students",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "Students",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "Students",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Admins",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "Admins",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullName",
                table: "Teachers");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Teachers");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Admins");

            migrationBuilder.RenameColumn(
                name: "HashedPassword",
                table: "Teachers",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "HashedPassword",
                table: "Students",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "HashedPassword",
                table: "Admins",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Admins",
                newName: "Password");
        }
    }
}
