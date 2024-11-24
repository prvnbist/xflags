CREATE TABLE IF NOT EXISTS "flag_environment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"environment" varchar(80) NOT NULL,
	"value" boolean DEFAULT false NOT NULL,
	"flag_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "flag_environment_flag_id_environment_unique" UNIQUE("flag_id","environment")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flag_environment" ADD CONSTRAINT "flag_environment_flag_id_flag_id_fk" FOREIGN KEY ("flag_id") REFERENCES "public"."flag"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "flag" DROP COLUMN IF EXISTS "value";--> statement-breakpoint
ALTER TABLE "flag" DROP COLUMN IF EXISTS "environment";