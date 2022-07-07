module default {

    abstract type Creatable {
        required property createdBy -> User;
        required property createdDate -> datetime;
    }
    abstract type Updatable {
        required property updatedBy -> User;
        required property updatedOn -> datetime;
    }
    abstract type Deletable {
        required property deletedBy -> User;
        required property deletedOn -> datetime;
    }

    type User extending Creatable, Updatable, Deletable {
        required property name -> str;
        required property email -> str;

        multi link roles -> Role;
    }
    type Role extending Creatable, Updatable, Deletable {
        required property name -> str;
        required property description -> str;
        multi link permissions -> Permission;
    }
    type Permission extending Creatable, Updatable, Deletable {
        required property name -> str;
        required property read -> bool;
        required property write -> bool;
        required property delete -> bool;
        multi property resources -> array<str>; //would like this to list InventoryItem, Project, Part etc
    }

    type Part extending Creatable, Updatable, Deletable {
        required property partNumber -> str;
        link project -> Project;
        required property partType -> str {
            constraint one_of ('Part', 'Assembly');
        }
        required property name -> str;
        link parentPart -> Part;
        property notes -> str;
        link status -> PartStatus;
        required property quantity -> int64 {
            default := 1;
        }
        // source_material	varchar(255)
        // have_material	int(11)
        // quantity	varchar(255)
        // cut_length	varchar(255)
        // priority	int(11)
        // drawing_created	int(11)
        // gcode_link	varchar(255)
        // gcode_created	varchar(255)
        // drawing_link	varchar(255)
        // cnc_part	int(11)
        // assignee	varchar(255)
        // print_part	int(11) [0]
        // milestone_id	varchar(255)

    }
    type Project extending Creatable, Updatable, Deletable {
        required property name -> str;
        required property partNumberPrefix -> str;
        multi link parts -> Part
    }
    type PartStatus extending Creatable, Updatable, Deletable {
        required property name -> str;
        property description -> str;
    }
}
