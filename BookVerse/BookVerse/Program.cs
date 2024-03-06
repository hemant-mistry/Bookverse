using BookVerse.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

//Setting up the SQL database connections
builder.Services.AddDbContext<DumpDatabaseContext>(options =>
{
	options.UseSqlServer("Server=LAPTOP-KESGRPLJ\\SQLEXPRESS; Database=BookverseDB; Trusted_Connection=True; TrustServerCertificate=True;");
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
	name: "default",
	pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();